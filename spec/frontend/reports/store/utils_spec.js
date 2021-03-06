import * as utils from '~/reports/store/utils';
import {
  STATUS_FAILED,
  STATUS_SUCCESS,
  ICON_WARNING,
  ICON_SUCCESS,
  ICON_NOTFOUND,
} from '~/reports/constants';

describe('Reports store utils', () => {
  describe('summaryTextbuilder', () => {
    it('should render text for no changed results in multiple tests', () => {
      const name = 'Test summary';
      const data = { total: 10 };
      const result = utils.summaryTextBuilder(name, data);

      expect(result).toBe('Test summary contained no changed test results out of 10 total tests');
    });

    it('should render text for no changed results in one test', () => {
      const name = 'Test summary';
      const data = { total: 1 };
      const result = utils.summaryTextBuilder(name, data);

      expect(result).toBe('Test summary contained no changed test results out of 1 total test');
    });

    it('should render text for multiple failed results', () => {
      const name = 'Test summary';
      const data = { failed: 3, total: 10 };
      const result = utils.summaryTextBuilder(name, data);

      expect(result).toBe(
        'Test summary contained 3 failed/error test results out of 10 total tests',
      );
    });

    it('should render text for multiple errored results', () => {
      const name = 'Test summary';
      const data = { errored: 7, total: 10 };
      const result = utils.summaryTextBuilder(name, data);

      expect(result).toBe(
        'Test summary contained 7 failed/error test results out of 10 total tests',
      );
    });

    it('should render text for multiple fixed results', () => {
      const name = 'Test summary';
      const data = { resolved: 4, total: 10 };
      const result = utils.summaryTextBuilder(name, data);

      expect(result).toBe('Test summary contained 4 fixed test results out of 10 total tests');
    });

    it('should render text for multiple fixed, and multiple failed results', () => {
      const name = 'Test summary';
      const data = { failed: 3, resolved: 4, total: 10 };
      const result = utils.summaryTextBuilder(name, data);

      expect(result).toBe(
        'Test summary contained 3 failed/error test results and 4 fixed test results out of 10 total tests',
      );
    });

    it('should render text for a singular fixed, and a singular failed result', () => {
      const name = 'Test summary';
      const data = { failed: 1, resolved: 1, total: 10 };
      const result = utils.summaryTextBuilder(name, data);

      expect(result).toBe(
        'Test summary contained 1 failed/error test result and 1 fixed test result out of 10 total tests',
      );
    });

    it('should render text for singular failed, errored, and fixed results', () => {
      // these will be singular when the copy is updated
      const name = 'Test summary';
      const data = { failed: 1, errored: 1, resolved: 1, total: 10 };
      const result = utils.summaryTextBuilder(name, data);

      expect(result).toBe(
        'Test summary contained 2 failed/error test results and 1 fixed test result out of 10 total tests',
      );
    });

    it('should render text for multiple failed, errored, and fixed results', () => {
      const name = 'Test summary';
      const data = { failed: 2, errored: 3, resolved: 4, total: 10 };
      const result = utils.summaryTextBuilder(name, data);

      expect(result).toBe(
        'Test summary contained 5 failed/error test results and 4 fixed test results out of 10 total tests',
      );
    });
  });

  describe('reportTextBuilder', () => {
    it('should render text for no changed results in multiple tests', () => {
      const name = 'Rspec';
      const data = { total: 10 };
      const result = utils.reportTextBuilder(name, data);

      expect(result).toBe('Rspec found no changed test results out of 10 total tests');
    });

    it('should render text for no changed results in one test', () => {
      const name = 'Rspec';
      const data = { total: 1 };
      const result = utils.reportTextBuilder(name, data);

      expect(result).toBe('Rspec found no changed test results out of 1 total test');
    });

    it('should render text for multiple failed results', () => {
      const name = 'Rspec';
      const data = { failed: 3, total: 10 };
      const result = utils.reportTextBuilder(name, data);

      expect(result).toBe('Rspec found 3 failed/error test results out of 10 total tests');
    });

    it('should render text for multiple errored results', () => {
      const name = 'Rspec';
      const data = { errored: 7, total: 10 };
      const result = utils.reportTextBuilder(name, data);

      expect(result).toBe('Rspec found 7 failed/error test results out of 10 total tests');
    });

    it('should render text for multiple fixed results', () => {
      const name = 'Rspec';
      const data = { resolved: 4, total: 10 };
      const result = utils.reportTextBuilder(name, data);

      expect(result).toBe('Rspec found 4 fixed test results out of 10 total tests');
    });

    it('should render text for multiple fixed, and multiple failed results', () => {
      const name = 'Rspec';
      const data = { failed: 3, resolved: 4, total: 10 };
      const result = utils.reportTextBuilder(name, data);

      expect(result).toBe(
        'Rspec found 3 failed/error test results and 4 fixed test results out of 10 total tests',
      );
    });

    it('should render text for a singular fixed, and a singular failed result', () => {
      const name = 'Rspec';
      const data = { failed: 1, resolved: 1, total: 10 };
      const result = utils.reportTextBuilder(name, data);

      expect(result).toBe(
        'Rspec found 1 failed/error test result and 1 fixed test result out of 10 total tests',
      );
    });

    it('should render text for singular failed, errored, and fixed results', () => {
      // these will be singular when the copy is updated
      const name = 'Rspec';
      const data = { failed: 1, errored: 1, resolved: 1, total: 10 };
      const result = utils.reportTextBuilder(name, data);

      expect(result).toBe(
        'Rspec found 2 failed/error test results and 1 fixed test result out of 10 total tests',
      );
    });

    it('should render text for multiple failed, errored, and fixed results', () => {
      const name = 'Rspec';
      const data = { failed: 2, errored: 3, resolved: 4, total: 10 };
      const result = utils.reportTextBuilder(name, data);

      expect(result).toBe(
        'Rspec found 5 failed/error test results and 4 fixed test results out of 10 total tests',
      );
    });
  });

  describe('statusIcon', () => {
    describe('with failed status', () => {
      it('returns ICON_WARNING', () => {
        expect(utils.statusIcon(STATUS_FAILED)).toEqual(ICON_WARNING);
      });
    });

    describe('with success status', () => {
      it('returns ICON_SUCCESS', () => {
        expect(utils.statusIcon(STATUS_SUCCESS)).toEqual(ICON_SUCCESS);
      });
    });

    describe('without a status', () => {
      it('returns ICON_NOTFOUND', () => {
        expect(utils.statusIcon()).toEqual(ICON_NOTFOUND);
      });
    });
  });
});
