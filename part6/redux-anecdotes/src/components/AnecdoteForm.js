import React from 'react';
import { useDispatch } from 'react-redux';

import { createAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  /* -- Function to add anecdotes -- */
  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    // alert(content);
    dispatch(createAnecdote(content));
    event.target.anecdote.value = '';
  };

  return (
    <form onSubmit={addAnecdote}>
      <div><input name='anecdote'/></div>
      <button type='submit'>create</button>
    </form>
  );
};

export default AnecdoteForm;