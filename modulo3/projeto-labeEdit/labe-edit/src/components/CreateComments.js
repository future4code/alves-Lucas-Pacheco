import React from 'react'
import axios from 'axios'
import { BASE_URL, HEADER } from '../constants/credentiais'
import useForm from '../hooks/useForm'
import { ButtonComment, DisplayFormsComment, InputComment } from '../style/StyleadCreateComments'

export default function CreateComments({ stateLike, setStateLike, params }) {
    const { form, handleChange, cleanFields } = useForm({ body: "" })

    const onSubmitComment = (event) => {
        event.preventDefault()
        axios
            .post(`${BASE_URL}/posts/${params}/comments`, form, HEADER)
            .then((res) => {
                alert("Comentado")
                cleanFields()
                setStateLike(!stateLike)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }
    return (
        <DisplayFormsComment>
            <DisplayFormsComment onSubmit={onSubmitComment}>
                <InputComment
                    name="body"
                    placeholder='Adiciona Comentário'
                    value={form.body}
                    onChange={handleChange}
                    required
                />
              <ButtonComment>Responder</ButtonComment>
            </DisplayFormsComment>
        </DisplayFormsComment>
    )
}
