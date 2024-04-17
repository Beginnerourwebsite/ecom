function Optionsloops(datas, show, value) {
    return (


        datas.map(element => {
            // return (

            return (<option value={element[value]}>{element[show]}</option>)
            // )
        })



        // console.log(opt)
    )
}
export { Optionsloops }