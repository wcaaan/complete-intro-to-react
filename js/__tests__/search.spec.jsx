// @flow

import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../store";
import {setSearchTerm} from '../actionCreators';
import preload from "../../data.json";
import Search, { Unwrapped as UnwrappedSearch } from "../Search";
import ShowCard from "../ShowCard";

// describe('Search', () => {
//   xit('renders correctly', () => {
//     const component = shallow(<UnwrappedSearch show={preload.shows} searchTerm="" />);
//     expect(component).toMatchSnapshot();
//   });

//   it('should render all shows where there is no search', () => {
//     const component = shallow(<UnwrappedSearch show={preload.shows} searchTerm="" />);
//     expect(component.find(ShowCard).length).toEqual(preload.shows.length);
//   });

//   it('Search should render correct amount of shows based on search term', () => {
//     const searchWord = 'black';
//     const component = shallow(<Search show={preload.shows} />);
//     component.find('input').simulate('change', { target: { value: searchWord } });
//     const showCount = preload.shows.filter(
//       show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
//     ).length;
//     expect(component.find(ShowCard).length).toEqual(showCount);
//   });
// });

xtest("Search renders correctly", () => {
  const component = shallow(
    <UnwrappedSearch show={preload.shows} searchTerm="" />
  );
  expect(component).toMatchSnapshot();
});

xtest("Search should render all shows where there is no search", () => {
  const component = shallow(<Search show={preload.shows} />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test("Search should render correct amount of shows based on search term", () => {
  const searchWord = "black";
  store.dispatch(setSearchTerm(searchWord));
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search show={preload.shows} />
      </MemoryRouter>
    </Provider>
  );
  
  const showCount = preload.shows.filter(
    show =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find('.show-card').length).toEqual(showCount);
});
