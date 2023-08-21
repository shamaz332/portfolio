/* eslint-disable react/no-unescaped-entities */
import { gitHubUrl, projectsUrl } from '../constants'

import Link from 'next/link'
import styles from '../styles/About.module.css'

export default function About() {
	return (
		<div className={styles.aboutMe}>
			<h2>About Me</h2>
			<div className={styles.desc}>
				<p>
					I'm Shamaz Saeed, a skilled developer specializing in
					real-time web applications. With expertise spanning
					JavaScript, HTML, CSS, Redux, Material-UI, React, and more,
				</p>
				<p>
					I create seamless user experiences. My proficiency in
					technologies like Gatsby, Bootstrap, and GraphQL ensures
					visually appealing and responsive interfaces.
				</p>
				<p>
					I excel in optimizing performance, using Google Analytics,
					SEO, and responsive design. Leveraging Node.js and MongoDB,
				</p>
				<p>
					I handle backend intricacies while also excelling in
					ElectronJS for cross-platform desktop apps. Git, GitHub,
					JIRA, and agile methodologies streamline my collaborative
					workflow.{' '}
				</p>
				<p>
					<p>
						Testing frameworks like Jest and Storybook ensure code
						quality. I'm experienced in CI/CD and skilled with
						GraphQL and Contentful.
					</p>
					My{' '}
					<Link href={projectsUrl}>
						<a target='_blank'>projects</a>
					</Link>{' '}
					are available on my{' '}
					<Link href={gitHubUrl}>
						<a target='_blank'>GitHub profile</a>
					</Link>
					. Feel free to check out my resume or contact me by email!
				</p>
			</div>
		</div>
	)
}
