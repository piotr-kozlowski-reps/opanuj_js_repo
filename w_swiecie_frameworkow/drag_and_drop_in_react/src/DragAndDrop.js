import React, { useState, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Board from "./Board";
import ArticleCard from "./ArticleCard";

const articlesBoardDraft = [
  {
    id: "card_1",
    articleLinkImg: "https://img.youtube.com/vi/_H1MYbmyupw/maxresdefault.jpg",
    articleLinkName: "Q&A",
    articleLinkDate: "14/2/20",
    articleLinkImgLogo:
      "https://www.datocms-assets.com/12596/1561887961-1560597249-przeprogramowanilogo.png?auto=format&fm=jpg",
    articleLinkCompanyName: "Przeprogramowani",
  },
  {
    id: "card_2",
    articleLinkImg: "https://img.youtube.com/vi/_H1MYbmyupw/maxresdefault.jpg",
    articleLinkName: "Article",
    articleLinkDate: "18/4/21",
    articleLinkImgLogo:
      "https://www.datocms-assets.com/12596/1561887961-1560597249-przeprogramowanilogo.png?auto=format&fm=jpg",
    articleLinkCompanyName: "Przeprogramowani",
  },
];

// const columns = [
//   {
//     boardDraft: {
//       name: 'Drafts',
//       id: 'board-draft',
//       items: [],
//     },
//   },
// ];

const DragAndDrop = (props) => {
  const [articlesDraft, setArticlesDraft] = useState(articlesBoardDraft);
  const [articlesPublished, setArticlesPublished] = useState([]);

  const boardDraftRef = useRef();
  const boardPublishedRef = useRef();

  return (
    <div className="flex justify-center items-top my-16">
      <DragDropContext onDropEnd={() => {}}>
        <Droppable droppableId="board-draft">
          {(provided, snapshot) => {
            console.log(provided);
            return (
              <div
                id="board-draft"
                className="bg-white overflow-hidden rounded-md p-30 mx-5 max-w-xs flex-1 flex flex-col"
              >
                <h2 className="text-4xl p-5 text-center">Drafts</h2>
                <Board
                  name="Drafts"
                  id="board-draft"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {articlesDraft.map((article, index) => {
                    return (
                      // >
                      //   <h2 className="text-4xl p-5 text-center">{props.name}</h2>
                      //   <main className="p-10 bg-gray-300 flex-1">{props.children}</main>
                      // </div>

                      <Draggable
                        key={article.id}
                        draggableId={article.id}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <div
                              id={article.id}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{ ...provided.draggableProps.style }}
                              className="my-10 bg-gray-400"
                            >
                              {article.id}
                            </div>

                            //   <ArticleCard
                            //   id={article.id}
                            //   ref={provided.innerRef}
                            //   {...provided.draggableProps}
                            //   {...provided.dragHandleProps}
                            //   style={{...provided.draggableProps.style}}
                            //   article-info={article}
                            // />
                          );
                        }}
                      </Draggable>
                    );
                  })}
                </Board>
              </div>
            );
          }}
        </Droppable>

        <Droppable droppableId="board-published">
          {(provided, snapshot) => {
            return (
              <Board
                name="Published"
                id="board-published"
                {...provided.droppableProps}
                {...provided.droppableProps}
                ref={boardPublishedRef.current}
              />
            );
          }}
        </Droppable>

        {/* <Board name="Drafts" id="board-draft">
          <ArticleCard
            id="card_1"
            article-link-img="https://img.youtube.com/vi/_H1MYbmyupw/maxresdefault.jpg"
            article-link-name="Q&A"
            article-link-date="14/2/20"
            article-link-img-logo="https://www.datocms-assets.com/12596/1561887961-1560597249-przeprogramowanilogo.png?auto=format&fm=jpg"
            article-link-company-name="Przeprogramowani"
          />
          <ArticleCard
            id="card_2"
            article-link-img="https://img.youtube.com/vi/svgI-V_BBOs/maxresdefault.jpg"
            article-link-name="Article"
            article-link-date="18/4/21"
            article-link-img-logo="https://www.datocms-assets.com/12596/1561887961-1560597249-przeprogramowanilogo.png?auto=format&fm=jpg"
            article-link-company-name="Przeprogramowani"
          />
        </Board>
        <Board name="Published" id="board-published"></Board> */}
      </DragDropContext>
    </div>
  );
};

export default DragAndDrop;
