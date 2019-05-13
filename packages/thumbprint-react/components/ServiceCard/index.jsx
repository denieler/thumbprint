import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../Image/index.jsx';
import styles from './index.module.scss';

const ServiceCardImage = ({ url, sources, alt }) => (
    <Image className={styles.image} sources={sources} aspectRatio="8:5" src={url} alt={alt} />
);

function ServiceCardTitle({ children }) {
    return (
        <div className={styles.title} title={children}>
            {children}
        </div>
    );
}

function ServiceCardDescription({ iconColor, icon, children }) {
    return (
        <div
            className={classNames(styles.descriptionWrap, {
                [styles.iconBlue]: iconColor === 'blue',
                [styles.iconGreen]: iconColor === 'green',
            })}
        >
            {icon}
            <div className={styles.description}>{children}</div>
        </div>
    );
}

export default function ServiceCard({ url, children }) {
    return (
        <a href={url} className={styles.root}>
            {children}
        </a>
    );
}

ServiceCard.propTypes = {
    /**
     * URL pointing to the card link destination.
     */
    url: PropTypes.string.isRequired,
    /**
     * Accepts content of `ServiceCardImage`, `ServiceCardTitle`, `ServiceCardDescription`.
     */
    children: PropTypes.node.isRequired,
};

ServiceCardImage.propTypes = {
    /**
     * URL pointing to image to be displayed.
     */
    url: PropTypes.string.isRequired,
    /**
     * Allows the browser to choose the best file format and image size based on the device screen
     * density and the width of the rendered image.
     */
    sources: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(['image/webp', 'image/jpeg', 'image/png', 'image/gif'])
                .isRequired,
            srcSet: PropTypes.string.isRequired,
        }),
    ),
    /**
     * Image alt tag that's passed to `aria-label` for better accessibility.
     */
    alt: PropTypes.string,
};

ServiceCardImage.defaultProps = {
    alt: undefined,
    sources: undefined,
};

ServiceCardTitle.propTypes = {
    /**
     * Service title.
     */
    children: PropTypes.node.isRequired,
};

ServiceCardDescription.propTypes = {
    /**
     * Service description or other service info.
     */
    children: PropTypes.node.isRequired,
    /**
     * Icon from [Thumbprint Icons](/icons/) to render within the
     * service card. It must be one of the small icons.
     */
    icon: PropTypes.node,
    /**
     * Color options for icon. Only required if you want to override default color.
     */
    iconColor: PropTypes.oneOf(['blue', 'green']),
};

ServiceCardDescription.defaultProps = {
    icon: undefined,
    iconColor: 'blue',
};

export { ServiceCardDescription, ServiceCardTitle, ServiceCardImage };
