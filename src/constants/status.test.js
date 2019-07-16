import { ModuleStatus } from './status';

describe('Status', () => {
  it('should have an IDLE status', async () => {
    expect(ModuleStatus.IDLE).toEqual('');
  });

  it('should have an LOADING status', async () => {
    expect(ModuleStatus.LOADING).toEqual('UPDATING');
  });

  it('should have an ERROR status', async () => {
    expect(ModuleStatus.ERROR).toEqual('ERROR');
  });
});
