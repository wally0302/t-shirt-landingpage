import type { ComponentPropsWithoutRef } from "react";

import styles from "./mdx-components.module.css";

type AnchorProps = ComponentPropsWithoutRef<"a">;

const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => <h2 className={styles.h2} {...props} />,
  h3: (props: ComponentPropsWithoutRef<"h3">) => <h3 className={styles.h3} {...props} />,
  p: (props: ComponentPropsWithoutRef<"p">) => <p className={styles.p} {...props} />,
  ul: (props: ComponentPropsWithoutRef<"ul">) => <ul className={styles.ul} {...props} />,
  ol: (props: ComponentPropsWithoutRef<"ol">) => <ol className={styles.ol} {...props} />,
  li: (props: ComponentPropsWithoutRef<"li">) => <li className={styles.li} {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => <blockquote className={styles.quote} {...props} />,
  a: ({ href, ...rest }: AnchorProps) => {
    const isExternal = typeof href === "string" && href.startsWith("http");
    return (
      <a
        className={styles.link}
        href={href}
        rel={isExternal ? "noreferrer noopener" : undefined}
        target={isExternal ? "_blank" : undefined}
        {...rest}
      />
    );
  }
};

export default mdxComponents;
