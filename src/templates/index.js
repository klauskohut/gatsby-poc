import React from 'react'
import loadable from '@loadable/component'
import Slider from '../components/Slider'

const Component = loadable(({ content }) => import(`../components/${content.component.name}`))

const DefaultTemplate = ({ pageContext }) => (
  <div>
    <Slider />
    {pageContext.page.contents.map(content => <Component key={content.component.id} content={content} />)}
  </div>
)

export default DefaultTemplate
