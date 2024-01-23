import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

let tiptapField = document.querySelector('.tiptap-field')

if (tiptapField) {
    new Editor({
        element: tiptapField,
        extensions: [
            StarterKit,
        ],
        content: tiptapField.dataset.value,
    })
}
