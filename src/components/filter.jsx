const onClick = ({ key }) => {
	let value;
	console.log(key);
	if ( key === '0'){
		value = 'Age';
	}
	if ( key === '1'){
		value = 'Breed';
	}
	if ( key === '2'){
		value = 'Sex';
	}
	if ( key === '3'){
		value = 'Location';
	}
	if ( key === '4'){
		setPress(false);
		option.handleFilter('name');
		message.info(`Filter is cleared. Search is by name default`);
	}
  
	if ( key!== '4'){	
		message.info(`Filtering by ${value}`);
		option.handleFilter(value);
	}
};
	
	const menu = (
  <Menu>
    {['Age', 'Breed', 'Sex', 'Location', 'Clear Filter'].map((value, i) => <Menu.Item  key={i}  onClick={!press && onClick } >{value}  </Menu.Item>)}
  </Menu>
);
	