import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    max-width: 450px;
  }

  img {
    padding: 0 5px;
    height: 150px;
  }
`;

const posts = [{"id":3,"src":"react_testing_library.webp","title":"Enzyme And React Testing library","text":"React has become one of the core things of the web developer now. It has been used for building thousands of websites. When start writing React application, the first thing comes to your mind is choosing a good testing library to test your web application. There are many available nowadays like react-test-utils, enzyme, react-testing-library and many more. We’ll be talking about Enzyme and react testing library. Let’s have a quick introduction of both.\n\nThe Enzyme is a javascript library for testing react components created by Airbnb. It can also be used to test the component’s actions and behaviour.\n\nReact testing library is also used to test react components and their behaviour. It has built upon the React Dom Test utils. The guiding principle of React testing library is The more your tests resemble the way your software is used, the more confidence they can give you.\n\nBoth can be used with Jest. Jest is the de facto unit testing framework for ReactJS project. Also, jest comes default with the create-react-app library which is used for creating initial react app setup.\n\nLet’s check how to use both:\n\nBoth the libraries are very easy to install and use.\n\nFor enzyme, if you are using npm package manager then just write npm i enzyme in your terminal. If you are using yarn package manager then yarn add enzyme.\n\nSame for the react-testing-library, for npm package manager, write npm i @testing-library/react and for yarn write yarn add @testing-library/react.\n\nAnd done!! You are ready to use… Now let’s have a quick demo of both testing libraries with a small Todo App.\n\nWe have a component Todo which renders another component called Form and renders the todo list.","date":"2016-03-01T12:00"},{"id":1,"src":"react.png","title":"ReactJs Vs React Native Vs React VR: Differences Explained","text":"Even though these technologies belong to same parents with similar names and technology backbone; they still stand miles apart from each other. How?  \n\nIn this article, we are going to talk about these differences and how can they benefit your business for app development. \n\nLet’s begin with the basics of these technologies: \n\nEverything React: What is React?\n\nReact is one of the most common amongst mobile and web applications. Today, every brand seems to be exploring new options in order to create virtual reality experiences & are finding React VR quite a suitable option. This is indeed true. ","date":"2014-06-01T12:00"},{"id":4,"src":"styled.jpg","title":"Styled component","text":"The Lindberg WayEvery single Lindberg frame is designed by and carefully handcrafted by Lindberg in-house specialists to ensure the exceptional quality of Danish design. Lindberg follows a minimalist approach to style and functionality, excluding all non-essential components, including screws, rivets and welded parts. The result is ultra-lightweight eyewear that keeps revolutionising the eyewear industry with award-winning designs and innovative technologies. Lindberg designs have changed the fundamentals of modern eyewear and have set entirely new standards for style, comfort and durability.\n\nEvery single Lindberg frame is tailormade to order\nThe Lindberg modular system allows users to customise every element of their frame to suit their own style and needs. Every single Lindberg frame is tailormade to order, individually crafted and hand-finished by highly skilled in-house eyewear specialists. The customisation approach offers frames in many different colours, textures, shapes and styles made with unique materials and technologies that are updated continually. Every component is made using responsibly sourced and exceptionally long-lasting materials, including titanium, gold, platinum, buffalo horn and diamonds.\n\nThe Lindberg philosophy is deeply rooted in the history of Danish design, where notable designers like Arne Jacobsen, HJ Wegner and Jørgen Utzon had mutual ideologies: a respect for timeless design and materials – and a need for innovation. It is also this ideology that drives Lindberg forward.\n\nLindberg was established in 1984 in Aarhus, Denmark\nThe values of Lindberg were formed by the founder, optician Poul-Jørn Lindberg in Aarhus, Denmark. Today his architect son, Henrik Lindberg, carries on the family business with the core philosophy of “Design by – made by”.\n\nExplore the world of Lindberg here or find your nearest store to try on a pair of glasses and experience what Lindberg is all about for yourself.","date":""},{"id":2,"src":"nextjs.png","title":"Next.js version 9 has been released with built-in support for zero-config TypeScript, along with automatic static optimization and API routes. Next.js is a toolkit for universal, server-rendered (or statically pre-rendered) React.js applications.\n\nThe ability to use TypeScript without needing to use a plugin is an improvement from the situation when basic TypeScript support was added to Next.js 6 a year ago. In addition to using the plugin, users also had to customize settings and enable the plugin, and even then it didn't integrate type-checking and types weren't provided by the core Next.js. The improved support includes automated setup for TypeScript, and integrated type checking.\nThe next improvement to the new release is support for dynamic route segments. This has been a much-requested feature ever since Next.js was first released, but until now has been managed by having a custom server API for using Next.js programmatically. However, the developers found many users of Next.js ended up using a custom server to get true dynamic routing.\n\nTo overcome this, Next.js now supports creating routes with basic named parameters, and users can make use of the /pages directory and have Next.js automatically match requests like /post/1, and will render the page defined in pages/post/[pid].js. The matching URL segment will be passed as a query parameter to your page with the name specified between the [square-brackets].\n\nAutomatic Static Optimization has also been added, meaning developers can make use of both fully server-rendering and statically exporting their application on a per-page basis. This has been achieved by making Next.js capable of emitting hybrid applications that contain both server-rendered and statically generated pages with no configuration or special handling required.","text":"Text from the first article"}]
const Posts = () => {
  let postToRender = posts.sort((a,b) => a.id - b.id)
  console.log(postToRender)
  return (
    <Container>
    <ul>
      {postToRender.map(post => (
        <>
        <h3>{post.title}</h3>
        <img data-testid="img" src="/static/react.png" alt="js"/>
        <p>{post.text}</p>
        </>
      ))}
    </ul>
    </Container>
  )
}
// J'ai pas pu importer le fetch ni axios dans mon environement
Posts.getInitialProps = async () => {
  const res = await fetch('https://upply-interview.herokuapp.com/')
  const posts = await res.json()
  return { posts: posts }
}


export default Posts;
