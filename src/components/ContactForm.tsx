
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseWhiskyBrand, chooseWhiskyFlavor, chooseWhiskyAge, chooseWhiskyImage } from "../redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[];
  onClose: () => void;
}

const ContactForm = ( props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    event.preventDefault()
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseWhiskyBrand(data.whisky_brand));
      dispatch(chooseWhiskyFlavor(data.whisky_flavor));
      dispatch(chooseWhiskyAge(data.whisky_age));
      dispatch(chooseWhiskyImage(data.whisky_image));
      //dispatch(chooseCarCondition(data.car_condition));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="whisky_brand">Whisky Brand</label>
          <Input {...register('whisky_brand')} name='whisky_brand' placeholder="Whisky Brand" />
        </div>
        <div>
          <label htmlFor="whisky_flavor">Whisky Flavor</label>
          <Input {...register('whisky_flavor')} name='whisky_flavor' placeholder="Whisky Flavor" />
        </div>
        <div>
          <label htmlFor="whisky_age">Whisky Age</label>
          <Input {...register('whisky_age')} name='whisky_age' placeholder="Whisky Age" />
        </div>
        <div>
          <label htmlFor="whisky_image">Whisky Image</label>
          <Input {...register('whisky_image')} name='whisky_image' placeholder="Whisky Image (Insert URL)" />
        </div>
        {/* <div>
          <label htmlFor="car_condition">Car Condition</label>
          <Input {...register('car_condition')} name='car_condition' placeholder="Car Condition" />
        </div> */}
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm