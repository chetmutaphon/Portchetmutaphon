// Fetch gallery images from a single Supabase Storage bucket with per-section folders
// (artwork, photography, socialmedia).
(function () {
  const IMAGE_EXT = /\.(jpg|jpeg|png|webp|gif|heic|heif|avif)$/i;

  function storageImageUrl(bucket, folder, fileName) {
    const path = `${bucket}/${folder}/${encodeURIComponent(fileName)}`;
    const base = window.__SUPABASE_URL;
    if (/\.(heic|heif)$/i.test(fileName)) {
      return `${base}/storage/v1/render/image/public/${path}?width=1600&format=origin`;
    }
    return `${base}/storage/v1/object/public/${path}`;
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
              title: f.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
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
          setUrl(storageImageUrl(bucket, folder, file.name));
        });

      return () => {
        cancelled = true;
      };
    }, [folder, bucket]);

    return url;
  }

  window.useSupabaseSlotImage = useSupabaseSlotImage;
})();
