export const tally = () => ({ type: 'TALLY' });

export const deal = () => (dispatch, getState) => {
  dispatch({ type: 'DEAL' });
  dispatch(tally());
  if (getState().playerScore >= 21) {
    dispatch({ type: 'OUTCOME' });
  }
};

export const hit = (who) => (dispatch, getState) => {
  dispatch({ type: 'HIT', who });
  dispatch(tally());
  if (getState().playerScore >= 21) {
    dispatch({ type: 'OUTCOME' });
  }
};

export const stand = () => (dispatch, getState) => {
  while(getState().dealerScore < 17) {
    dispatch(hit('dealer'));
  }
  dispatch({ type: 'OUTCOME' });
};

export const quit = () => (dispatch, getState) => {
  dispatch({ type: 'QUIT' });
};

export const newGame = () => (dispatch, getState) => {
  dispatch({ type: 'NEWGAME' });
};

export const score = (who) => (dispatch, getState) => {
  dispatch({ type: 'SCORE', payload: who })
}

export const restart = () => (dispatch) => {
  dispatch({ type: 'RESTART' })
}