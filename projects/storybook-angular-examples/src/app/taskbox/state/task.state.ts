import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Task } from '../models/task.model';

// Defines the actions available to the app
export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
  ERROR: 'APP_ERROR',
};

export class ArchiveTask {
  static readonly type = actions.ARCHIVE_TASK;

  constructor(public payload: string) {}
}

export class PinTask {
  static readonly type = actions.PIN_TASK;

  constructor(public payload: string) {}
}

 // The class definition for our error field
 export class AppError {
   static readonly type = actions.ERROR;
   constructor(public payload: boolean) {}
 }

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = {
  1: { id: '1', title: 'Something', state: 'TASK_INBOX' },
  2: { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  3: { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  4: { id: '4', title: 'Something again', state: 'TASK_INBOX' },
};

export class TaskStateModel {
  entities: { [id: number]: Task };
  error: boolean;
}

// Sets the default state
@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    entities: defaultTasks,
    error: false,
  },
})
export class TasksState {
  @Selector()
  static getAllTasks(state: TaskStateModel) {
    const entities = state.entities;
    return Object.keys(entities).map(id => entities[+id]);
  }

  @Selector()
  static getError(state: TaskStateModel) {
    const { error } = state;
    return error;
  }

  
  @Action(PinTask)
  pinTask({ patchState, getState }: StateContext<TaskStateModel>, { payload }: PinTask) {
    const state = getState().entities;
    const currentState = (state as any)[payload].state;
    console.log('pinTask', currentState)
    const entities = {
      ...state,
      [payload]: { ...(state as any)[payload], state: currentState === 'PIN_TASK' ? 'TASK_INBOX' : 'PIN_TASK' },
    };

    patchState({
      entities,
    });
  }

  @Action(ArchiveTask)
  archiveTask({ patchState, getState }: StateContext<TaskStateModel>, { payload }: ArchiveTask) {
    const state = getState().entities;
    const currentState = (state as any)[payload].state;
    console.log('archiveTask', currentState)
    const entities = {
      ...state,
      [payload]: { ...(state as any)[payload], state: currentState === 'TASK_ARCHIVED' ? 'TASK_INBOX' : 'TASK_ARCHIVED' },
    };

    patchState({
      entities,
    });
  }
  
  @Action(AppError)
  setAppError({ patchState, getState }: StateContext<TaskStateModel>, { payload }: AppError) {
    const state = getState();
    patchState({
      error: !state.error,
    });
  }
}