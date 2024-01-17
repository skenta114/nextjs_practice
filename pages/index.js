import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>ようこそ！Next.jsを使ってデプロイまでしてみました！！</p>
      </section>
      <section className={`${utilStyles.bodyFt}`}>
        <p>
          初めてのNext.js。
          以前から気になっていたのですが時間がなくてなかなか手が出せてなかったのですが、
          一段落ついてやっと触れました！
            <span className={`${utilStyles.bodyFc}`}>
             今もテスト前なんだけど...
            </span>
          触ってみた感想としては、Laravelよりかは使いやそう！
        </p>
        <p>
          しかし！
        </p>
        <p>
          機能が多すぎるし学習コストがかかる。
        </p>
        <p>
          それでも私が気に入っている理由それは、
          <span className={`${utilStyles.bodyFc2}`}>読み込みが速い！！</span>
        </p>
        <p>
          <span className={`${utilStyles.bodyFc3}`}>試しに記録の「Next.jsとは？」のリンクに飛んでみてください。</span>
          他のサイトと比べると読み込みが非常に速いと思います。
          今後はNexxt.js使ってwebアプリケーションを作ることが多くなりそう....
        </p>
      </section>
      <br/>
      <section className={utilStyles.headingMd}>
        <p>
          (
          <a href="https://nextjs.org/learn">Next.jsのチュートリアル</a>
          を参考に作成しました。)
        </p>
        <p>
          このページのソースコードは{''}
          <a href="https://github.com/skenta114/nextjs_practice">ここから！</a>
        </p>
      </section>
       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>記録</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}