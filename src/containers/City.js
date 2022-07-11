import { connect } from 'react-redux';
import City from 'src/components/City';
import { setCity } from 'src/actions';

const mapStateToProps = (state, ownProps) => ({
    city: state.city,
  });

const mapDispatchToProps = (dispatch) => ({
    setCityA: (payload) => {
        dispatch(setCity(payload));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
