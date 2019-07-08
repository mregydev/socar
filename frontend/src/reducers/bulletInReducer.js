import { Show_Loading, Reset_Result, Show_Result, Hide_Loading, Reset_Form, Bulletins_Fetched, Bulletin_Fetched } from '../actions/types';

export default function bullerinReducer(state = { showloading: false, resultMessage: "", items: [], item: {} }, action) {

  switch (action.type) {

    case Show_Loading:
      {
        return { ...state, showloading: true }
      }

    case Hide_Loading: {
      return { ...state, showloading: false }
    }

    case Show_Result: {
      return { ...state, resultMessage: action.payload.Message }
    }

    case Bulletins_Fetched: {
      return { ...state, showloading: false, items: action.payload.items }
    }

    case Bulletin_Fetched: {
      return { ...state, showloading: false, item: action.payload.item }
    }

    case Reset_Result:
      {
        return { ...state, resultMessage: "" }
      }

    default:
      return state
  }
}