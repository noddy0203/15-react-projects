import React from 'react'

const List = ({ user }) => {
    return (
        <>
            {
                user.map((people) => {
                    const { name, age, image } = people;
                    return (
                        <div className="maiListDiv">
                            <div className="personDetail">
                                <img className='userImage' src={image} alt="..person" />
                                <div className="nameAge">
                                    <h3>{name}</h3>
                                    <p>{`${age} years old`}</p>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default List
