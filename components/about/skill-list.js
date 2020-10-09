import React, { PropTypes } from 'react';

const SkillList = ({ list }) => (
  <ul>
    <li className="title"><strong>{list.title}</strong></li>
    {list.items.map((item, i) => (
      <li key={i} className="item"><small>{item}</small></li>
    ))}

    <style jsx>{`
      ul {
        max-width: 34em;
        margin: 2rem 0 3rem;
        padding: 0;
        list-style-type: none;
        color: #555;
      }

      ul:before,
      ul:after {
        content: " ";
        display: table;
        clear: both;
      }

      small,
      strong {
        font-size: 80%;
      }

      strong {
        color: #aaa;
        text-transform: uppercase;
        letter-spacing: .1em;
        font-weight: 700;
      }

      .title {
        display: block;
        margin: .25rem 0;
      }

      @media (min-width: 30em) {
        .item {
          width: 50%;
          display: inline;
          float: left;
        }
      }
    `}</style>
  </ul>
);

SkillList.propTypes = {
  list: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default SkillList;
