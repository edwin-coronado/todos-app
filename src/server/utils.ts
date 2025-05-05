import { GlideRecord, gs } from '@servicenow/glide';

export function recordCreatedByMe(record: GlideRecord): boolean {
    return gs.getUser().getID() === record.getValue('sys_created_by');

}

export function recordCreatedByMeOrNew(record: GlideRecord): boolean {
    return recordCreatedByMe(record) || record.isNewRecord();
}