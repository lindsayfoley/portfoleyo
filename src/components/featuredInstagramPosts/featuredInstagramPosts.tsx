import Script from "next/script";
import { useEffect } from "react";
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
  useEffect(() => {
    if (featuredPosts?.length !== 0 && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  if (featuredPosts?.length === 0) {
    return;
  }

  return (
    <>
      <Script async src="//www.instagram.com/embed.js" />
      <div className={styles.container}>
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
