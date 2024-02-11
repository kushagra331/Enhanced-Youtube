import React from 'react'
const commentsData = [
    {
      name: "Kushagra Shrivastava",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Kushagra Shrivastava",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "First Nest",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Second Nest",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Third Nest",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Fourth Nest - 1",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Fifth Nest",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Fourth Nest - 2",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Kushagra Shrivastava",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    }
];
  
const Comments = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
          className="w-12 h-12"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div className="px-3">
          <p key={1}className="font-bold">{name}</p>
          <p key={2}>{text}</p>
        </div>
      </div>
    );
};
const CommentsList = ({ data }) => {
  return data.map((res,index)=>(
    <div key={index}>
      <Comments data={res} key={index}/>
      <div className='pl-5 border border-l-black'>
          <CommentsList data={res.replies} key={index}/>
      </div>
    </div>
  ))
};
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>comments</h1>
      {/* <Comments data={commentsData[0]}/>  */}
      <CommentsList data={commentsData} key={3}/>
    </div>
  )
}

export default CommentsContainer;
