import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import styles from "@/styles/pages/404.module.scss";
import animationData from "@/json/lottie/404.json";

const Lottie = dynamic(() => import("react-lottie"));
const Wrapper = dynamic(() => import("@/layout/wrapper/Wrapper"));

const Index = () => (
    <Wrapper>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1>Page not found</h1>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={300}
            width={300}
          />
          <Link href="/">Back to home </Link>
        </div>
      </div>
    </Wrapper>
  );

export default Index;
