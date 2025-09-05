/**
 * These well-known tags can be used to classify different
 * tests into suites to run.
 */
export class Tags {
    private constructor();
    /**
     * @remarks
     * Indicates that the tagged test should be a part of all
     * suites.
     *
     */
    static readonly suiteAll = 'suite:all';
    /**
     * @remarks
     * Indicates that the tagged test should be a part of an
     * internal (debug) test suite.
     *
     */
    static readonly suiteDebug = 'suite:debug';
    /**
     * @remarks
     * Indicates that the tagged test should be a part of the
     * default test suite.
     *
     */
    static readonly suiteDefault = 'suite:default';
    /**
     * @remarks
     * Indicates that the tagged test should be a part of a suite
     * of disabled tests.
     *
     */
    static readonly suiteDisabled = 'suite:disabled';
    static readonly suiteNextUpdate = 'suite:nextupdate';
}
