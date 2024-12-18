from sqlalchemy import orm
from api import db
from . import Base


class Slide(Base):
    __tablename__ = "slides"
    id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=True)

    patient_id = db.Column(db.String, db.ForeignKey("patients.id"), nullable=True)

    patient = db.relationship(
        "Patient",
        backref=orm.backref("slides", uselist=True, lazy="noload"),
        uselist=False,
        lazy="noload",
    )

    def __repr__(self):
        return "<Slide %r>" % self.name
