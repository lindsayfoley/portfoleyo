import { useEffect, useRef, useState } from "react";
import { featuredPosts } from "./featuredPosts";
import SectionTitle from "../sectionTitle/sectionTitle";
import styles from "./featuredInstagramPosts.module.css";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    instgrm: any;
  }
}

const FeaturedInstagramPosts = () => {
  const [hasLoadedPosts, setHasLoadedPosts] = useState(false);
  const isMissingPostData = featuredPosts?.length === 0;
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    if (!node || isMissingPostData || hasLoadedPosts) {
      return;
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const instagramScript = document.createElement("script");
          instagramScript.src = "https://www.instagram.com/embed.js";
          instagramScript.async = true;

          instagramScript.onload = () => {
            if (window.instgrm?.Embeds) {
              window.instgrm.Embeds.process();
              setHasLoadedPosts(true);
            }
          };

          document.querySelector("body")?.append(instagramScript);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "1000px",
    });
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [hasLoadedPosts, isMissingPostData]);

  if (isMissingPostData) {
    return null;
  }

  return (
    <>
      <div className={styles.container} ref={ref}>
        <SectionTitle
          title="Latest updates"
          subtitle="@ThePortfoleyo"
          titleHref="https://www.instagram.com/theportfoleyo/"
          isTitleFirst={false}
        />
        <div className={styles.posts}>
          {featuredPosts.map((postId) => (
            <blockquote
              key={postId}
              className="instagram-media"
              data-instgrm-permalink={`https://www.instagram.com/p/${postId}`}
            ></blockquote>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedInstagramPosts;
