const IS_NOTICE = "notice/IS_NOTICE";

export const isNotice = () => ({
  type: IS_NOTICE,
});

type ActionsType = ReturnType<typeof isNotice>;

interface StateType {
  isNotice: boolean;
}

const initialState: StateType = {
  isNotice: false,
};

export default function notice(
  state = initialState,
  action: ActionsType
): StateType {
  switch (action.type) {
    case IS_NOTICE:
      return { ...state, isNotice: !state.isNotice };
    default:
      return state;
  }
}
