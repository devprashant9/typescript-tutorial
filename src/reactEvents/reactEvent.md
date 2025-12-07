# 🌟 **React Synthetic Event Types — Full Cheat Sheet (TypeScript)**

## 🟦 1. **Form Events**

| React Event | TypeScript Type                          | Applies To   |
| ----------- | ---------------------------------------- | ------------ |
| `onSubmit`  | `React.FormEvent<HTMLFormElement>`       | `<form>`     |
| `onChange`  | `React.ChangeEvent<HTMLInputElement>`    | `<input>`    |
|             | `React.ChangeEvent<HTMLTextAreaElement>` | `<textarea>` |
|             | `React.ChangeEvent<HTMLSelectElement>`   | `<select>`   |
| `onInput`   | `React.FormEvent<HTMLInputElement>`      | `<input>`    |
| `onInvalid` | `React.InvalidEvent<HTMLInputElement>`   | `<input>`    |

---

## 🟩 2. **Mouse Events**

| React Event     | TypeScript Type                       | Applies To  |
| --------------- | ------------------------------------- | ----------- |
| `onClick`       | `React.MouseEvent<HTMLButtonElement>` | `<button>`  |
|                 | `React.MouseEvent<HTMLDivElement>`    | `<div>`     |
| `onDoubleClick` | `React.MouseEvent<HTMLElement>`       | any element |
| `onMouseEnter`  | `React.MouseEvent<HTMLElement>`       | any         |
| `onMouseLeave`  | `React.MouseEvent<HTMLElement>`       | any         |
| `onMouseMove`   | `React.MouseEvent<HTMLElement>`       | any         |

---

## 🟧 3. **Keyboard Events**

| Event        | Type                                                   |
| ------------ | ------------------------------------------------------ |
| `onKeyDown`  | `React.KeyboardEvent<HTMLInputElement>`                |
| `onKeyUp`    | `React.KeyboardEvent<HTMLInputElement>`                |
| `onKeyPress` | `React.KeyboardEvent<HTMLInputElement>` *(deprecated)* |

---

## 🟪 4. **Focus Events**

| Event     | Type                                 |
| --------- | ------------------------------------ |
| `onFocus` | `React.FocusEvent<HTMLInputElement>` |
| `onBlur`  | `React.FocusEvent<HTMLInputElement>` |

---

## 🟥 5. **Touch & Pointer Events**

| Event           | Type                              |
| --------------- | --------------------------------- |
| `onTouchStart`  | `React.TouchEvent<HTMLElement>`   |
| `onTouchMove`   | `React.TouchEvent<HTMLElement>`   |
| `onTouchEnd`    | `React.TouchEvent<HTMLElement>`   |
| `onPointerDown` | `React.PointerEvent<HTMLElement>` |
| `onPointerUp`   | `React.PointerEvent<HTMLElement>` |

---

## 🟨 6. **Clipboard Events**

| Event     | Type                                     |
| --------- | ---------------------------------------- |
| `onCopy`  | `React.ClipboardEvent<HTMLInputElement>` |
| `onCut`   | `React.ClipboardEvent<HTMLInputElement>` |
| `onPaste` | `React.ClipboardEvent<HTMLInputElement>` |

---

## 🟫 7. **Drag & Drop Events**

| Event        | Type                              |
| ------------ | --------------------------------- |
| `onDrag`     | `React.DragEvent<HTMLDivElement>` |
| `onDragOver` | `React.DragEvent<HTMLDivElement>` |
| `onDrop`     | `React.DragEvent<HTMLDivElement>` |

---

## ⚪ 8. **Animation & Transition Events**

| Event              | Type                                 |
| ------------------ | ------------------------------------ |
| `onAnimationStart` | `React.AnimationEvent<HTMLElement>`  |
| `onAnimationEnd`   | `React.AnimationEvent<HTMLElement>`  |
| `onTransitionEnd`  | `React.TransitionEvent<HTMLElement>` |

---

# 🧠 **The UNIVERSAL Pattern** (what you figured out)

```
React.<EventType><HTMLNodeType>
```

Examples:

```
React.MouseEvent<HTMLButtonElement>
React.ChangeEvent<HTMLInputElement>
React.FormEvent<HTMLFormElement>
React.KeyboardEvent<HTMLInputElement>
React.FocusEvent<HTMLDivElement>
```

Your understanding is absolutely correct.

---
