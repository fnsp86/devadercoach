import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Pressable, Text, Linking, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface YouTubeEmbedProps {
  videoId: string;
  height?: number;
  width?: number;
}

export default function YouTubeEmbed({ videoId, height = 220, width }: YouTubeEmbedProps) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [slowLoad, setSlowLoad] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const w = width ?? SCREEN_WIDTH - 40;

  useEffect(() => {
    setReady(false);
    setSlowLoad(false);
    timeoutRef.current = setTimeout(() => {
      setSlowLoad(true);
    }, 10000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [retryKey]);

  const onReady = useCallback(() => {
    setReady(true);
    setSlowLoad(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const onError = useCallback(() => {
    setError(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  function handleRetry() {
    setError(false);
    setReady(false);
    setSlowLoad(false);
    setRetryKey((k) => k + 1);
  }

  if (error) {
    return (
      <View style={[styles.fallback, { height, width: w }]}>
        <Text style={styles.fallbackEmoji}>🎬</Text>
        <Text style={styles.fallbackText}>Video kon niet geladen worden</Text>
        <Pressable onPress={handleRetry} style={styles.retryBtn}>
          <Text style={styles.retryBtnText}>Opnieuw proberen</Text>
        </Pressable>
        <Pressable
          onPress={() => Linking.openURL(`https://youtube.com/watch?v=${videoId}`)}
          style={styles.youtubeBtn}
        >
          <Text style={styles.fallbackLink}>Bekijk op YouTube →</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.container, { width: w }]}>
      {!ready && (
        <View style={[styles.loader, { height, width: w }]}>
          <ActivityIndicator color="#F59E0B" size="small" />
          <Text style={styles.loadingText}>Video laden...</Text>
          {slowLoad && (
            <View style={styles.slowContainer}>
              <Text style={styles.slowText}>Dit duurt langer dan verwacht</Text>
              <Pressable onPress={handleRetry} style={styles.retrySmall}>
                <Text style={styles.retrySmallText}>Opnieuw</Text>
              </Pressable>
            </View>
          )}
        </View>
      )}
      <View style={{ opacity: ready ? 1 : 0 }}>
        <YoutubePlayer
          key={retryKey}
          height={height}
          width={w}
          videoId={videoId}
          play={false}
          onReady={onReady}
          onError={onError}
          webViewProps={{
            allowsInlineMediaPlayback: true,
            mediaPlaybackRequiresUserAction: false,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  loader: {
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    borderRadius: 14,
    gap: 6,
  },
  loadingText: {
    color: '#888',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 4,
  },
  slowContainer: {
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  slowText: {
    color: '#666',
    fontSize: 12,
  },
  retrySmall: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },
  retrySmallText: {
    color: '#F59E0B',
    fontSize: 12,
    fontWeight: '600',
  },
  fallback: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1F2B',
    borderRadius: 14,
    gap: 10,
    padding: 20,
  },
  fallbackEmoji: {
    fontSize: 40,
  },
  fallbackText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  retryBtn: {
    backgroundColor: '#F59E0B',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  retryBtnText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
  },
  youtubeBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  fallbackLink: {
    color: '#F59E0B',
    fontSize: 14,
    fontWeight: '700',
  },
});
