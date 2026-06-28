// Fetch gallery images and videos from a single Supabase Storage bucket.
(function () {
  const IMAGE_EXT = /\.(jpg|jpeg|png|webp|gif|heic|heif|avif)$/i;
  const VIDEO_EXT = /\.(mp4|webm|mov|m4v|ogg)$/i;

  function storagePublicUrl(bucket, folder, fileName) {
    const path = `${bucket}/${folder}/${encodeURIComponent(fileName)}`;
    return `${window.__SUPABASE_URL}/storage/v1/object/public/${path}`;
  }

  function storageImageUrl(bucket, folder, fileName) {
    if (/\.(heic|heif)$/i.test(fileName)) {
      return `${window.__SUPABASE_URL}/storage/v1/render/image/public/${bucket}/${folder}/${encodeURIComponent(fileName)}?width=1600&format=origin`;
    }
    return storagePublicUrl(bucket, folder, fileName);
  }

  function storageProfileUrl(bucket, folder, fileName) {
    const path = `${bucket}/${folder}/${encodeURIComponent(fileName)}`;
    const base = window.__SUPABASE_URL;
    return `${base}/storage/v1/render/image/public/${path}?width=900&height=1200&resize=cover&format=origin`;
  }

  function titleFromFile(name) {
    return name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
  }

  function useSupabaseImages(folder) {
    const [images, setImages] = React.useState([]);
    const [loading, setLoading] = React.useState(!!window.__supabase);
    const bucket = window.__SUPABASE_BUCKET || "portfolio";

    React.useEffect(() => {
      if (!window.__supabase) {
        setLoading(false);
        return;
      }

      let cancelled = false;
      setLoading(true);

      window.__supabase.storage
        .from(bucket)
        .list(folder, { limit: 50, sortBy: { column: "created_at", order: "desc" } })
        .then(({ data, error }) => {
          if (cancelled) return;
          if (error || !data) {
            setLoading(false);
            return;
          }

          const urls = data
            .filter((f) => IMAGE_EXT.test(f.name))
            .map((f, i) => ({
              id: `${folder}/${f.name}`,
              title: titleFromFile(f.name),
              label: folder.toUpperCase(),
              hue: (i * 40) % 360,
              img: storageImageUrl(bucket, folder, f.name),
            }));

          setImages(urls);
          setLoading(false);
        });

      return () => {
        cancelled = true;
      };
    }, [folder, bucket]);

    return { images, loading };
  }

  window.useSupabaseImages = useSupabaseImages;

  // Single image slot (hero background, profile portrait) from a folder.
  function useSupabaseSlotImage(folder) {
    const [url, setUrl] = React.useState("");
    const bucket = window.__SUPABASE_BUCKET || "portfolio";

    React.useEffect(() => {
      if (!window.__supabase) return;

      let cancelled = false;

      window.__supabase.storage
        .from(bucket)
        .list(folder, { limit: 10, sortBy: { column: "created_at", order: "desc" } })
        .then(({ data, error }) => {
          if (cancelled || error || !data) return;
          const file = data.find((f) => IMAGE_EXT.test(f.name));
          if (!file) return;
          const url = folder === "profile"
            ? storageProfileUrl(bucket, folder, file.name)
            : storageImageUrl(bucket, folder, file.name);
          setUrl(url);
        });

      return () => {
        cancelled = true;
      };
    }, [folder, bucket]);

    return url;
  }

  window.useSupabaseSlotImage = useSupabaseSlotImage;

  function useSupabaseVideos(folder) {
    const [videos, setVideos] = React.useState([]);
    const [loading, setLoading] = React.useState(!!window.__supabase);
    const bucket = window.__SUPABASE_BUCKET || "portfolio";

    React.useEffect(() => {
      if (!window.__supabase) {
        setLoading(false);
        return;
      }

      let cancelled = false;
      setLoading(true);

      window.__supabase.storage
        .from(bucket)
        .list(folder, { limit: 50, sortBy: { column: "created_at", order: "desc" } })
        .then(({ data, error }) => {
          if (cancelled) return;
          if (error || !data) {
            setLoading(false);
            return;
          }

          const items = data
            .filter((f) => VIDEO_EXT.test(f.name))
            .map((f) => ({
              id: `${folder}/${f.name}`,
              title: titleFromFile(f.name),
              desc: "Video reel",
              url: storagePublicUrl(bucket, folder, f.name),
            }));

          setVideos(items);
          setLoading(false);
        });

      return () => {
        cancelled = true;
      };
    }, [folder, bucket]);

    return { videos, loading };
  }

  window.useSupabaseVideos = useSupabaseVideos;
})();
