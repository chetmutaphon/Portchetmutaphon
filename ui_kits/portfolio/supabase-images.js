// Fetch gallery images from a single Supabase Storage bucket with per-section folders.
(function () {
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
            .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f.name))
            .map((f, i) => ({
              id: `${folder}/${f.name}`,
              title: f.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
              label: folder.toUpperCase(),
              hue: (i * 40) % 360,
              img: `${window.__SUPABASE_URL}/storage/v1/object/public/${bucket}/${folder}/${encodeURIComponent(f.name)}`,
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
          const file = data.find((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f.name));
          if (!file) return;
          setUrl(
            `${window.__SUPABASE_URL}/storage/v1/object/public/${bucket}/${folder}/${encodeURIComponent(file.name)}`
          );
        });

      return () => {
        cancelled = true;
      };
    }, [folder, bucket]);

    return url;
  }

  window.useSupabaseSlotImage = useSupabaseSlotImage;
})();
