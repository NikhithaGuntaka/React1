function ListOfIndianPlayers(props){
	return(
		this.props.IndianPlayers.map((player)=>{
                return(
                    <div>
                        <li>Mr. {player} </li>
                    </div>
                )
            })
	)
}
export default ListOfIndianPlayers;