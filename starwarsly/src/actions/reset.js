// Reset action for redux

import { RESET_ALL } from "./types";


function resetAll() {
  return { type: RESET_ALL }
}


export { resetAll }