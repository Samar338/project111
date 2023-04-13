import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash, faEdit, faClock } from "@fortawesome/free-solid-svg-icons";

const Page = ({ choice }) => {
	if (choice === "home") {
		return (
			<div className="content">
				<div class="details">
					<div class="Orders">
						<table>
							<thead>
								<tr>
									<td>Name</td>
									<td>Team</td>
									<td>Rating</td>
									<td>Delete</td>
									<td>Suspend</td>
									<td>Edit</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>samar omer</td>
									<td>Project</td>
									<td>50%</td>
									<td>
										<span class="status delivered">
											<FontAwesomeIcon icon={faTrash} />
										</span>
									</td>
									<td>
										<span class="status delivered">
											<FontAwesomeIcon icon={faClock} />
										</span>
									</td>
									<td>
										<span class="status delivered">
											<FontAwesomeIcon icon={faEdit} />
										</span>
									</td>
								</tr>
								<tr>
									<td>samar omer</td>
									<td>Project</td>
									<td>30%</td>
									<td>
										<span class="status delivered">
											<FontAwesomeIcon icon={faTrash} />
										</span>
									</td>
									<td>
										<span class="status delivered">
											<FontAwesomeIcon icon={faClock} />
										</span>
									</td>
									<td>
										<span class="status delivered">
											<FontAwesomeIcon icon={faEdit} />
										</span>
									</td>
								</tr>
								<tr>
									<td>samar omer</td>
									<td>Project</td>
									<td>20%</td>
									<td>
										<span class="status delivered">
											<FontAwesomeIcon icon={faTrash} />
										</span>
									</td>
									<td>
										<span class="status delivered">
											<FontAwesomeIcon icon={faClock} />
										</span>
									</td>
									<td>
										<span class="status delivered">
											<FontAwesomeIcon icon={faEdit} />
										</span>
									</td>
								</tr>
								<tr>
									<td>samar omer</td>
									<td>Project</td>
									<td>10%</td>
									<td>
										<span class="status delivered">
											<FontAwesomeIcon icon={faTrash} />
										</span>
									</td>
									<td>
										<span class="status delivered">
											<FontAwesomeIcon icon={faClock} />
										</span>
									</td>
									<td>
										<span class="status delivered">
											<FontAwesomeIcon icon={faEdit} />
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	} else if (choice === "chart") {
		return (
			<div className="content">
				<h1> Hello I am chart</h1>
			</div>
		);
	} else if (choice === "flags") {
		return <div className="content">hELLO i AM flags</div>;
	} else if (choice === "time") {
		return <div className="content">hELLO i AM time</div>;
	} else if (choice === "regulations") {
		return <div className="content">hELLO i AM regulations</div>;
	} else if (choice === "regu") {
		return <div className="content">hELLO i AM regu</div>;
	}
	return <div className="content">Page</div>;
};

export default Page;
