export function update(inputs: any, name: string, newValue: any){
    return { ...inputs, [name]: { ...inputs[name], value: newValue}}
}

export function toValues(inputs: any){
    const data : any = {};
    for (let name in inputs){
        data[name] = inputs[name].value;
    }
    return data;
}

export function updateAll(inputs: any, newValues: any){
    const newInputs = {};
    for(var name in inputs){
        newInputs[name] = {...inputs[name], value: newValues[name]};
    }
    return newInputs;
}

export function validate(inputs: any, name: string){
    if(!inputs[name].validation){
        return inputs;
    }
    const isInValid = !inputs[name].validation(inputs[name].value);
   return { ...inputs, [name]: { ...inputs[name], invalid: isInValid.toString()}};
}

export function toDirty(inputs: any, name: string){
    return { ...inputs, [name]: { ...inputs[name], dirty:"true"}}
}