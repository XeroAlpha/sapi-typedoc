export enum GameTestErrorType {
    Assert = 'Assert',
    AssertAtPosition = 'AssertAtPosition',
    ExecutionTimeout = 'ExecutionTimeout',
    ExhaustedAttempts = 'ExhaustedAttempts',
    FailConditionsMet = 'FailConditionsMet',
    LevelStateModificationFailed = 'LevelStateModificationFailed',
    MethodNotImplemented = 'MethodNotImplemented',
    SimulatedPlayerOutOfBounds = 'SimulatedPlayerOutOfBounds',
    Unknown = 'Unknown',
    Waiting = 'Waiting',
}