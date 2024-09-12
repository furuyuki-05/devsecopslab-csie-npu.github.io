import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '開發方法',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        開發方法將聚焦於融合人工智慧與自動化安全分析技術，包括應用機器學習模型來預測與識別潛在威脅，並透過區塊鏈技術實現數據透明與防篡改能力。此外，會開發動態監控與異常偵測系統，能即時適應變化中的運算環境，以確保安全性與可靠性。這些方法將結合雲端運算與端點設備的協同工作，創造一個全面的安全解決方案。
      </>
    ),
  },
  {
    title: '資訊安全',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        實驗室的重點是開發先進的安全分析工具，結合人工智慧技術，確保系統能在動態、複雜的環境中防止各種攻擊與漏洞。我們專注於創新解決方案，提升資料保護、網路安全和系統防護，以保障現代服務的穩定與安全運行。
      </>
    ),
  },
  {
    title: '可觀測性',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        實驗室研究中將聚焦於如何透過先進的監控與數據分析技術，提升新興服務的透明度與可控性。這包括即時監控雲端、大數據中心與端點運算中系統的性能、安全性與異常行為，並結合人工智慧技術進行自動化的異常檢測與預測，從而提升系統的可靠性和風險應對能力，實現更智能化的運營管理。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
