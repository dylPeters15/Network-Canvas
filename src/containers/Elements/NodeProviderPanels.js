import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { zipWith } from 'lodash';
import { colorDictionary } from 'network-canvas-ui';
import { Panels, Panel } from '../../components/Elements';
import { NodeProvider } from '../Elements';
import { filteredDataSource } from '../../selectors/dataSource';

const colorPresets = [
  colorDictionary['edge-alt-1'],
  colorDictionary['edge-alt-2'],
  colorDictionary['edge-alt-3'],
  colorDictionary['edge-alt-4'],
  colorDictionary['edge-alt-5'],
];

const providerPresets = {
  existing: {
    type: 'existing',
    title: 'People from your existing lists',
    source: 'existing',
    selectable: true,
    filter: network => network,
  },
  previous: {
    type: 'previous',
    title: 'People from your previous visit',
    source: 'previous',
    draggable: true,
    filter: network => network,
  },
};

const getProviderConfig = (provider) => {
  // TODO: rehydrate looses methods, this puts a placehoder back in
  if (!provider) { return () => true; }
  if (Object.prototype.hasOwnProperty.call(providerPresets, provider)) {
    return providerPresets[provider];
  }
  return provider;
};

const getProviders = (state, config) => {
  const providerConfigs = config.map(provider => getProviderConfig(provider));

  const dataSources = providerConfigs.map(
    providerConfig =>
      filteredDataSource(state, providerConfig),
  );

  return zipWith(
    providerConfigs,
    dataSources,
    (a, b) => Object.assign({}, a, { network: b }),
  );
};

/**
  * Configures and renders `NodeProvider`s into panels according to the protocol config
  */

const getHighlight = (provider, panelNumber) => {
  if (provider.highlight) { return provider.highlight; }
  if (panelNumber > 0) { return colorPresets[panelNumber % colorPresets.length]; }
  return null;
};

const NodeProviderPanels = ({ providers }) => {
  const totalNodes = providers.reduce(
    (sum, provider) => sum + provider.network.nodes.length,
    0,
  );


  return (
    <Panels minimise={totalNodes === 0}>
      { providers.map((provider, panelNumber) => {
        const highlight = getHighlight(provider, panelNumber);

        return (
          <Panel
            title={provider.title}
            key={provider.type}
            minimise={provider.network.nodes.length === 0}
            highlight={highlight}
          >
            <NodeProvider {...provider} />
          </Panel>
        );
      }) }
    </Panels>
  );
};

NodeProviderPanels.propTypes = {
  providers: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    providers: getProviders(state, ownProps.config),
  };
}

export default connect(mapStateToProps)(NodeProviderPanels);
