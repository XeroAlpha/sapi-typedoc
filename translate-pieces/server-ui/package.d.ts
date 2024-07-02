/**
 * @beta
 * @packageDocumentation
 * `@minecraft/server-ui` 模块包含了用于基于对话框的简易用户交互功能的类型。
 * 
 *   * {@link ActionFormData} 包含了一系列带有标题与图片的按钮。便于要求用户从一系列选项中选择。
 *   * {@link MessageFormData} 则是包含了两个按钮的简易消息框，允许用户选择是/否或者确定/取消。
 *   * {@link ModalFormData} 则提供了一套更具灵活性的类似问卷形式的控件，允许用户填写并提交。
 * 
 * The `@minecraft/server-ui` module contains types for
 * expressing simple dialog-based user experiences.
 *
 *   * {@link ActionFormData} contain a list of buttons with
 * captions and images that can be used for presenting a set of
 * options to a player.
 *   * {@link MessageFormData} are simple two-button message
 * experiences that are functional for Yes/No or OK/Cancel
 * questions.
 *   * {@link ModalFormData} allow for a more flexible
 * "questionnaire-style" list of controls that can be used to
 * take input.
 * @example createActionForm.js
 * ```typescript
 * const form = new ActionFormData()
 *   .title("Months")
 *   .body("Choose your favorite month!")
 *   .button("January")
 *   .button("February")
 *   .button("March")
 *   .button("April")
 *   .button("May");
 *
 * form.show(players[0]).then((response) => {
 *   if (response.selection === 3) {
 *     dimension.runCommand("say I like April too!");
 *   }
 * });
 * ```
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-ui",
 *   "version": "1.3.0-beta"
 * }
 * ```
 *
 */