package com.group.book.history;

import com.group.book.book.Book;
import com.group.book.common.BaseEntity;
import com.group.book.user.User;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class BookTransactionHistory extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "boo_id")
    private Book book;
    //book relationship

    private boolean returned;
    private boolean returnApproved;


}
