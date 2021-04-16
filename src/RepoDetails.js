function RepoDetails({ details, loading }) {
  // Add/Remove selected class from list item
  var oldListItem = document.getElementsByClassName("selected");
  var newListItem = document.getElementById(details.id);

  if (oldListItem) {
    var i;
    for (i = 0; i < oldListItem.length; i++) {
      oldListItem[i].classList.remove("selected");
    }
  }

  if (newListItem) {
    newListItem.classList.add("selected");
  }

  if (loading) {
    return (
      <h1 className="loader">Loading...</h1>
    )
  }

  return (

    <div className="repo-details-container">
      <div className="user-details-container">
        <img href={details.user?.avatar_url} />
      </div>
      <div className="row">
        <label className="col-3 label">Name</label>
        <span className="col-9 value">{details.name}</span>
      </div>
      <div className="row">
        <label className="col-3 label">URL</label>
        <span className="col-9 value url">{details.url}</span>
      </div>
      <div className="row">
        <label className="col-3 label">Description</label>
        <span className="col-9 value">{details.description}</span>
      </div>
      <div className="row">
        <label className="col-3 label">Created Date</label>
        <span className="col-9 value">{details.created_at}</span>
      </div>
      <div className="row">
        <label className="col-3 label">Last Updated Date</label>
        <span className="col-9 value">{details.updated_at}</span>
      </div>
      <div className="row">
        <label className="col-3 label">License Info</label>
        <span className="col-9 value">{details.license?.name}</span>
      </div>
      <div className="row">
        <label className="col-3 label">Used Languages</label>
        <span className="col-9 value">{details.language}</span>
      </div>
    </div>
  )
}

export default RepoDetails;
