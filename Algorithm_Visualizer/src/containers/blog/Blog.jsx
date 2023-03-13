import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05,bubble,insertion,selection,binary,linear} from './imports';
import './blog.css';


const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Algorithms are plenty, <br /> Here's what we offer.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={bubble} date="Sorting Algorithm" text="Bubble Sort" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={insertion} date="Sorting Algorithm" text="Insertion Sort" />
        <Article imgUrl={selection} date="Sorting Algorithm" text="Selection Sort" />
        <Article imgUrl={linear} date="Searching Algorithm" text="Linear Search" />
        <Article imgUrl={binary} date="Searching Algorithm" text="Binary Search" />
      </div>
    </div>

    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Keys for Visualization, <br />The Color Codes.</h1>
    </div>


    <div className="gpt3__blog-container">
    <div className="btn11">
    <button >Array Element</button>
    </div>

    <div className="btn22">
    <button >Final Searched Element <br/> Sorted Portion of the array</button>
    </div>

    <div className="btn33">
    <button >Elements in Comparision</button>
    </div>

    </div>

    <div className="gpt3__blog-container">
    <div className="btn44">
    <button >Pivot Element in Selection Sort</button>
    </div>

    <div className="btn55">
    <button >Smallest element compared with pivot in Selection Sort</button>
    </div>

    <div className="btn66">
    <button >Element to be searched</button>
    </div>
    </div>
 
   
    </div>

  
);

export default Blog;
