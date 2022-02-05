function sideBar() {
  return (
    <h1>SideBar</h1>
    // <div className={styles.sideHeader}>
    //   <h1 className={styles.sideHeaderTitle}>Convert to GIF</h1>
    //   <div className={styles.subTitle}>
    //     <h6 className={styles.subTitleHeader}>
    //       Powered by <em>WASM</em>
    //     </h6>
    //     {inputVideo ? (
    //       <div className={styles.uploadedVideoWrapper}>
    //         <h5 style={{ marginBottom: 0 }}>File size</h5>
    //         <div className={styles.qualityWrapper}>
    //           <div className={styles.selectionWrapper}>
    //             <span
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 setSelected(0);
    //               }}
    //               className={`${styles.dot} ${
    //                 selected === 0 ? styles.dotSelected : ""
    //               }`}
    //             ></span>
    //             <p className={styles.dotSelectionText}>Small</p>
    //           </div>
    //           <div className={styles.selectionWrapper}>
    //             <span
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 setSelected(1);
    //               }}
    //               className={`${styles.dot} ${
    //                 selected === 1 ? styles.dotSelected : ""
    //               }`}
    //             ></span>
    //             <p className={styles.dotSelectionText}>Medium</p>
    //           </div>
    //           <div className={styles.selectionWrapper}>
    //             <span
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 setSelected(2);
    //               }}
    //               className={`${styles.dot} ${
    //                 selected === 2 ? styles.dotSelected : ""
    //               }`}
    //             ></span>
    //             <p className={styles.dotSelectionText}>Large</p>
    //           </div>
    //         </div>
    //         {!converting ? (
    //           <button
    //             className={styles.downloadButton}
    //             onClick={() => {
    //               if (!inputVideo) return;
    //               setConverting(true);
    //               convertToGif(inputVideo, setGif, outputQuality).then(() => {
    //                 downloadFile.current.click();
    //                 setConverting(false);
    //               });
    //             }}
    //           >
    //             Download
    //           </button>
    //         ) : (
    //           <h1>Hi</h1>
    //         )}
    //         <a
    //           ref={downloadFile}
    //           href={gif}
    //           download
    //           style={{ display: "none" }}
    //         ></a>
    //       </div>
    //     ) : (
    //       <p className={styles.subTitleParagraph}>
    //         Convert a video into a GIF in seconds with our free online tool.
    //       </p>
    //     )}
    //   </div>
    // </div>
  );
}

export default sideBar;
