import React, { useEffect, useState } from "react";
import "./FollowersList.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FollowersList() {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const { data } = await axios.get(
          "https://randomuser.me/api/?results=5"
        );
        setFollowers(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="followerslist-container">
      <div>
        {followers.map((follower, index) => (
          <div className="follower-item" key={`follower-${index}`}>
            <img
              src={follower.picture.large}
              alt={`${follower.name.first}'s profile`}
            />
            <div className="followers-details">
              <div className="follower-item-name" data-testid="follower-name">
                {`${follower.name.first} ${follower.name.last}`}
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
