import React from 'react';

const ArticleCard = (props) => {
  return (
    <article
      id={props['article-info'].id}
      className="bg-white rounded-md overflow-hidden my-10"
    >
      <a href="#">
        <img
          alt="Placeholder"
          className="block h-auto w-full"
          src={props['article-info'].articleLinkImg}
        />
      </a>
      <header className="pt-5 px-5 flex justify-between">
        <h1 className="text-lg text-center">
          <a href="#">{props['article-info'].articleLinkName}</a>
        </h1>
        <div>{props['article-link-date']}</div>
      </header>
      <footer className="px-5 py-3 flex items-center text-sm">
        <img
          alt="Placeholder"
          className="w-6 block rounded-full"
          src={props['article-info'].articleLinkImgLogo}
        />
        <p className="ml-2 text-sm">{props['article-info'].articleLinkCompanyName}</p>
      </footer>
    </article>
  );
};

export default ArticleCard;
