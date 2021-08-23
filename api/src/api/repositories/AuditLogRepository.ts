import { EntityRepository, Repository } from 'typeorm';

import { AuditLog } from '../models/AuditLog';

@EntityRepository(AuditLog)
export class AuditLogRepository extends Repository<AuditLog>  {

}
