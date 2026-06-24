// Fetch gallery images from Supabase Storage buckets (artwork, photography).
(function () {
  function useSupabaseImages(bucket) {
    const [images, setImages] = React.useState([]);
    const [loading, setLoading] = React.useState(!!window.__supabase);

    React.useEffect(() => {
      if (!window.__supabase) {
        setLoading(false);
        return;
      }

      let cancelled = false;
      setLoading(true);

      window.__supabase.storage
        .from(bucket)
        .list("", { limit: 50, sortBy: { column: "created_at", order: "desc" } })
        .then(({ data, error }) => {
          if (cancelled) return;
          if (error || !data) {
            setLoading(false);
            return;
          }

          const urls = data
            .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f.name))
            .map((f, i) => ({
              id: f.name,
              title: f.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
              label: bucket.toUpperCase(),
              hue: (i * 40) % 360,
              img: `${window.__SUPABASE_URL}/storage/v1/object/public/${bucket}/${encodeURIComponent(f.name)}`,
            }));

          setImages(urls);
          setLoading(false);
        });

      return () => {
        cancelled = true;
      };
    }, [bucket]);

    return { images, loading };
  }

  window.useSupabaseImages = useSupabaseImages;
})();
