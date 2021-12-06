import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


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

const DragAndDrop = () => {
  const [draftBoardArticles, setDraftBoardArticles] = useState(articlesBoardDraft);
  const [productionBoardArticles, setProductionBoardArticles] = useState([]);

  const onDragEnd = (result) => {
      const {source, destination} = result;

      if (!destination) return;

      if (destination.droppableId === source.droppableId
        && destination.index === source.index) return;

      let add, 
      draftArticlesArray = draftBoardArticles,  //active
      productionArticlesArray = productionBoardArticles;    //complete

      if(source.droppableId === 'board-draft') {
        add = draftArticlesArray[source.index];
        draftArticlesArray.splice(source.index, 1);
      } else {
        add = productionArticlesArray[source.index];
        productionArticlesArray.splice(source.index, 1);
      }

      if(destination.droppableId === 'board-draft') {
        draftArticlesArray.splice(destination.index, 0, add)
      } else {
        productionArticlesArray.splice(destination.index, 0, add)  
      }

      setProductionBoardArticles(productionArticlesArray);
      setDraftBoardArticles(draftArticlesArray);

      console.log(result);

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="flex justify-center items-top">
      {/* board1 */}
      <Droppable droppableId="board-draft">
        {
          (provided) => (
              <div 
              className="bg-white overflow-hidden rounded-md p-30 mx-5 max-w-xs flex-1 flex flex-col" 
              ref={provided.innerRef} 
              {...provided.droppableProps}
              >
              <h2 className="text-4xl p-5 text-center">Drafts</h2>
              <main className="p-10 bg-gray-300 flex-1">
                {/* articles */}
                {draftBoardArticles.map((article, index) => {
                  return (

                    <Draggable 
                    draggableId={article.id}
                    index={index}
                    key={article.id} 
                    >

                    {(provided) => (
                          <article 
                          // key={article.id} 
                          className="bg-white rounded-md overflow-hidden my-10"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          >
                         <a href="#">
                          <img
                            alt="Placeholder"
                            className="block h-auto w-full"
                            src={article.articleLinkImg}
                          />
                        </a>
                        <header className="pt-5 px-5 flex justify-between">
                          <h1 className="text-lg text-center">
                            <a href="#">{article.articleLinkName}</a>
                          </h1>
                          <div>{article.articleLinkDate}</div>
                        </header>
                        <footer className="px-5 py-3 flex items-center text-sm">
                          <img
                            alt="Placeholder"
                            className="w-6 block rounded-full"
                            src={article.articleLinkImgLogo}
                          />
                          <p className="ml-2 text-sm">{article.articleLinkCompanyName}</p>
                        </footer>
                      </article>

                  )}
                  

                </Draggable>

                  )
                })}

                {provided.placeholder}

              </main>
            </div>
          )
        }

      </Droppable>

      {/* board2 */}
            <Droppable droppableId="board-published">
        {
          (provided) => (
              <div 
              className="bg-white overflow-hidden rounded-md p-30 mx-5 max-w-xs flex-1 flex flex-col" 
              ref={provided.innerRef} 
              {...provided.droppableProps}
              >
              <h2 className="text-4xl p-5 text-center">Published</h2>
              <main className="p-10 bg-gray-300 flex-1">
                {/* articles */}
                {productionBoardArticles.map((article, index) => {
                  return (

                    <Draggable 
                    draggableId={article.id}
                    index={index}
                    key={article.id} 
                    >

                    {(provided) => (
                          <article 
                          // key={article.id} 
                          className="bg-white rounded-md overflow-hidden my-10"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          >
                         <a href="#">
                          <img
                            alt="Placeholder"
                            className="block h-auto w-full"
                            src={article.articleLinkImg}
                          />
                        </a>
                        <header className="pt-5 px-5 flex justify-between">
                          <h1 className="text-lg text-center">
                            <a href="#">{article.articleLinkName}</a>
                          </h1>
                          <div>{article.articleLinkDate}</div>
                        </header>
                        <footer className="px-5 py-3 flex items-center text-sm">
                          <img
                            alt="Placeholder"
                            className="w-6 block rounded-full"
                            src={article.articleLinkImgLogo}
                          />
                          <p className="ml-2 text-sm">{article.articleLinkCompanyName}</p>
                        </footer>
                      </article>
                  )}

                </Draggable>

                  )
                })}

              {provided.placeholder}

              </main>
            </div>
          )
        }

      </Droppable>

    </div>
    </DragDropContext>
  );
};

export default DragAndDrop;
